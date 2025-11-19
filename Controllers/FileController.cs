using HfilesMedicalDashboard_Api.DataAccessLayer.IDAL;
using HfilesMedicalDashboard_Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HfilesMedicalDashboard_Api.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class FileController : Controller
    {
        private readonly IFileService _fileService;
        private readonly IConfiguration _config;

        public FileController(IFileService fileService, IConfiguration config)
        {
            _fileService = fileService;
            _config = config;
        }



        //[Authorize]
        [HttpPost("upload")]
        public async Task<IActionResult> Upload(int userId, IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("File not found");

            // Base  folder
            string baseFolder = _config.GetValue<string>("FileStorage:Path") ?? "Uploads";

           
            string userFolder = Path.Combine(baseFolder, userId.ToString());
            if (!Directory.Exists(userFolder))
                Directory.CreateDirectory(userFolder);

            // Internal stored filename
            string ext = Path.GetExtension(file.FileName);
            string storedName = $"{Guid.NewGuid()}{ext}";
            string fullPath = Path.Combine(userFolder, storedName);

            // Save file
            using (var stream = System.IO.File.Create(fullPath))
            {
                await file.CopyToAsync(stream);
            }

            // Save DB record
            var model = new FileRecordModel
            {
                UserId = userId,
                FileName = file.FileName,
                FileType = ext,
                StoredFileName = storedName,
                ContentType = file.ContentType,
                Size = file.Length
            };

            var newId = await _fileService.InsertFileRecordAsync(model);

            return Ok(new { message = "File uploaded", fileId = newId });
        }

     
        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetFiles(int userId)
        {
            var files = await _fileService.GetFilesByUserAsync(userId);
            return Ok(files);
        }

         [HttpGet("{fileId}")]
        public async Task<IActionResult> GetFile(int fileId)
        {
            var file = await _fileService.GetFileByIdAsync(fileId);
            if (file == null) return NotFound("File not found");
            return Ok(file);
        }

        

        //  SOFT DELETE
        [HttpDelete("{fileId}")]
        public async Task<IActionResult> SoftDelete(int fileId)
        {
            var file = await _fileService.GetFileByIdAsync(fileId);
            if (file == null) return NotFound("File not found");

            var ok = await _fileService.SoftDeleteFileAsync(fileId);
            return ok ? Ok("File deleted") : StatusCode(500, "Delete failed");
        }

    }
}



 
