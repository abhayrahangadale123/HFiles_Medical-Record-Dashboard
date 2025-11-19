namespace HfilesMedicalDashboard_Api.Models
{
    public class FileRecordModel
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string FileName { get; set; }
        public string FileType { get; set; }
        public string StoredFileName { get; set; }
        public string ContentType { get; set; }

        public bool IsDeleted { get; set; }
        public long Size { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
