using HfilesMedicalDashboard_Api.Models;

namespace HfilesMedicalDashboard_Api.DataAccessLayer.IDAL
{
    public interface IFileService
    {
        Task<int> InsertFileRecordAsync(FileRecordModel model);
        Task<List<FileRecordModel>> GetFilesByUserAsync(int userId);
        Task<FileRecordModel?> GetFileByIdAsync(int fileId);
        Task<bool> SoftDeleteFileAsync(int fileId);
    }
}
