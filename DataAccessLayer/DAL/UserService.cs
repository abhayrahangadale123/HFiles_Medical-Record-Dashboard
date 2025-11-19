using System.Data;
using HfilesMedicalDashboard_Api.DataAccessLayer.IDAL;
using HfilesMedicalDashboard_Api.Models;
using Microsoft.Data.SqlClient;

namespace HfilesMedicalDashboard_Api.DataAccessLayer.DAL
{
    public class UserService : IUserService

    {
        private readonly IConfiguration _config;

        public UserService(IConfiguration config)
        {
            _config = config;
        }

        private string Connection => _config.GetConnectionString("DefaultConnection");
        public async Task<UserModel?> GetUserByIdAsync(int userId)
        {
            using var conn = new SqlConnection(Connection);
            using var cmd = new SqlCommand("sp_GetUserById", conn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@UserId", userId);

            await conn.OpenAsync();

            using var reader = await cmd.ExecuteReaderAsync();
            if (!reader.HasRows) return null;

            await reader.ReadAsync();

            var user = new UserModel
            {
                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                FullName = reader.GetString(reader.GetOrdinal("FullName")),
                Email = reader.GetString(reader.GetOrdinal("Email")),
                Phone = reader["Phone"] != DBNull.Value ? reader["Phone"].ToString() : null,
                Gender = reader["Gender"] != DBNull.Value ? reader["Gender"].ToString() : null,
                ProfileImageUrl = reader["ProfileImageUrl"] != DBNull.Value ? reader["ProfileImageUrl"].ToString() : null,
                CreatedAt = reader.GetDateTime(reader.GetOrdinal("CreatedAt"))
            };

            return user;
        }

     
        public async Task<bool> UpdateUserProfileAsync(int userId, UserModel model)
        {
            using var conn = new SqlConnection(Connection);
            using var cmd = new SqlCommand("sp_UpdateUserProfile", conn);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.AddWithValue("@UserId", userId);
            cmd.Parameters.AddWithValue("@FullName", model.FullName);
            cmd.Parameters.AddWithValue("@Email", model.Email);

            cmd.Parameters.AddWithValue("@Phone", (object?)model.Phone ?? DBNull.Value);
            cmd.Parameters.AddWithValue("@Gender", (object?)model.Gender ?? DBNull.Value);
            cmd.Parameters.AddWithValue("@ProfileImageUrl", (object?)model.ProfileImageUrl ?? DBNull.Value);

            await conn.OpenAsync();
            int rows = await cmd.ExecuteNonQueryAsync();

            return true;
        }

    }
}
