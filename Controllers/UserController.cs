using HfilesMedicalDashboard_Api.DataAccessLayer.DAL;
using HfilesMedicalDashboard_Api.DataAccessLayer.IDAL;
using HfilesMedicalDashboard_Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace HfilesMedicalDashboard_Api.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : Controller
    {
        private readonly  IUserService _repo;
        public UserController(IUserService repo) { _repo = repo; }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUserByIdAsync(id);
            if (user == null) return NotFound();
            return Ok(user);
        }

    

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProfile(int id, [FromBody] UserModel model)
        {
            // DB se user 
            var existingUser = await _repo.GetUserByIdAsync(id);
            if (existingUser == null)
                return NotFound("User not found");

           
          
            existingUser.FullName = model.FullName ?? existingUser.FullName;
            existingUser.Phone = model.Phone ?? existingUser.Phone;
            existingUser.Gender = model.Gender ?? existingUser.Gender;
            existingUser.ProfileImageUrl = model.ProfileImageUrl ?? existingUser.ProfileImageUrl;

            //  Update DAL  call 
            var success = await _repo.UpdateUserProfileAsync(id, existingUser);

            if (!success)
                return StatusCode(500, "Failed to update profile");

            return Ok("Profile updated successfully");
        }

    }
}
