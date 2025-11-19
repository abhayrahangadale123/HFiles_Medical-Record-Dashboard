using HfilesMedicalDashboard_Api.DataAccessLayer.IDAL;
using HfilesMedicalDashboard_Api.Helpers;
using HfilesMedicalDashboard_Api.Models;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Reflection;

namespace HfilesMedicalDashboard_Api.DataAccessLayer.DAL
{
    public class AuthService: IAuthService
    {
        private readonly IConfiguration _config;
        private string Connection => _config.GetConnectionString("DefaultConnection");

        public AuthService(IConfiguration config)
        {
            _config = config;
        }

         
        public async Task<int> CreateUserAsync(SignupModel model)
        {
            // DAL hashes password
            string hashedPassword = BCryptHelper.Hash(model.Password);
            using var conn = new SqlConnection(Connection);
            using var cmd = new SqlCommand("dbo.Signup", conn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@FullName", model.FullName);
            cmd.Parameters.AddWithValue("@Email", model.Email);
            cmd.Parameters.AddWithValue("@Phone", string.IsNullOrEmpty(model.Phone) ? (object)DBNull.Value :model.Phone);
            cmd.Parameters.AddWithValue("@Gender", string.IsNullOrEmpty(model.Gender) ? (object)DBNull.Value : model.Gender);
            cmd.Parameters.AddWithValue("@PasswordHash", hashedPassword);

            var outParam = new SqlParameter("@NewId", SqlDbType.Int) { Direction = ParameterDirection.Output };
            cmd.Parameters.Add(outParam);

            await conn.OpenAsync();
            await cmd.ExecuteNonQueryAsync();

            if (outParam.Value != DBNull.Value && int.TryParse(outParam.Value.ToString(), out int newId))
                return newId;

            return 0;
        }

      
        public async Task<UserModel?> LoginUser(string email)
        {
             

            using var conn = new SqlConnection(Connection);
             using var cmd = new SqlCommand("dbo.LoginUser", conn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@Email", email);
             

            await conn.OpenAsync();

            using var reader = await cmd.ExecuteReaderAsync();
            if (!reader.HasRows) return null;

            await reader.ReadAsync();

            var user = new UserModel
            {
                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                FullName = reader["FullName"]?.ToString() ?? string.Empty,
                Email = reader["Email"]?.ToString() ?? string.Empty,
                Phone = reader["Phone"] != DBNull.Value ? reader["Phone"].ToString() : null,
                Gender = reader["Gender"] != DBNull.Value ? reader["Gender"].ToString() : null,
                ProfileImageUrl = reader["ProfileImageUrl"] != DBNull.Value ? reader["ProfileImageUrl"].ToString() : null,
                PasswordHash = reader["PasswordHash"] != DBNull.Value ? reader["PasswordHash"].ToString() : null,
                CreatedAt = reader["CreatedAt"] != DBNull.Value ? Convert.ToDateTime(reader["CreatedAt"]) : DateTime.UtcNow
            };

            return user;
        }
    }
}
