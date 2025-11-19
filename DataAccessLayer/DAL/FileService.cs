using HfilesMedicalDashboard_Api.Models;
using Microsoft.Data.SqlClient;
using System.Data;
using HfilesMedicalDashboard_Api.DataAccessLayer.IDAL;

namespace HfilesMedicalDashboard_Api.DataAccessLayer.DAL
{
    public class FileService:IFileService
    {
        private readonly IConfiguration _config;
        public FileService(IConfiguration config) => _config = config;
        private string Connection => _config.GetConnectionString("DefaultConnection");

        public async Task<int> InsertFileRecordAsync(FileRecordModel model)
        {
            using var conn = new SqlConnection(Connection);
            using var cmd = new SqlCommand("sp_InsertFileRecord", conn) { CommandType = CommandType.StoredProcedure };

            cmd.Parameters.AddWithValue("@UserId", model.UserId);
            cmd.Parameters.AddWithValue("@FileName", model.FileName);
            cmd.Parameters.AddWithValue("@FileType", model.FileType);
            cmd.Parameters.AddWithValue("@StoredFileName", model.StoredFileName);
            cmd.Parameters.AddWithValue("@ContentType", model.ContentType);
            cmd.Parameters.AddWithValue("@Size", model.Size);

            var outParam = new SqlParameter("@NewId", SqlDbType.Int) { Direction = ParameterDirection.Output };
            cmd.Parameters.Add(outParam);

            await conn.OpenAsync();
            await cmd.ExecuteNonQueryAsync();

            return (int)(outParam.Value ?? 0);
        }

        public async Task<List<FileRecordModel>> GetFilesByUserAsync(int userId)
        {
            var list = new List<FileRecordModel>();
            using var conn = new SqlConnection(Connection);
            using var cmd = new SqlCommand("sp_GetFilesByUser", conn) { CommandType = CommandType.StoredProcedure };
            cmd.Parameters.AddWithValue("@UserId", userId);

            await conn.OpenAsync();
            using var reader = await cmd.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                list.Add(new FileRecordModel
                {
                    Id = reader.GetInt32(reader.GetOrdinal("Id")),
                    FileName = reader.GetString(reader.GetOrdinal("FileName")),
                    FileType = reader.GetString(reader.GetOrdinal("FileType")),
                    StoredFileName = reader.GetString(reader.GetOrdinal("StoredFileName")),
                    ContentType = reader.GetString(reader.GetOrdinal("ContentType")),
                    Size = reader.GetInt64(reader.GetOrdinal("Size")),
                    CreatedAt = reader.GetDateTime(reader.GetOrdinal("CreatedAt"))
                });
            }
            return list;
        }

        public async Task<FileRecordModel?> GetFileByIdAsync(int fileId)
        {
            using var conn = new SqlConnection(Connection);
            using var cmd = new SqlCommand("sp_GetFileById", conn) { CommandType = CommandType.StoredProcedure };
            cmd.Parameters.AddWithValue("@FileId", fileId);

            await conn.OpenAsync();
            using var reader = await cmd.ExecuteReaderAsync();
            if (!await reader.ReadAsync()) return null;

            return new FileRecordModel
            {
                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                FileName = reader.GetString(reader.GetOrdinal("FileName")),
                FileType = reader.GetString(reader.GetOrdinal("FileType")),
                StoredFileName = reader.GetString(reader.GetOrdinal("StoredFileName")),
                ContentType = reader.GetString(reader.GetOrdinal("ContentType")),
                Size = reader.GetInt64(reader.GetOrdinal("Size")),
                CreatedAt = reader.GetDateTime(reader.GetOrdinal("CreatedAt"))
            };
        }

        public async Task<bool> SoftDeleteFileAsync(int fileId)
        {
            try
            {
                using var conn = new SqlConnection(Connection);
                using var cmd = new SqlCommand("sp_DeleteFileRecord", conn) { CommandType = CommandType.StoredProcedure };
                cmd.Parameters.AddWithValue("@FileId", fileId);

                await conn.OpenAsync();
                var rows = await cmd.ExecuteNonQueryAsync();
               

                    return true;
                 
            }
            catch (Exception ex)
            {
               
                return false;
            }
        }
    }
}
