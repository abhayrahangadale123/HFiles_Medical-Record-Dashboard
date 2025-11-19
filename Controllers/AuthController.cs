using HfilesMedicalDashboard_Api.DataAccessLayer.IDAL;
using HfilesMedicalDashboard_Api.Helpers;
using HfilesMedicalDashboard_Api.Models;
using Microsoft.AspNetCore.DataProtection.KeyManagement;
using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Authorization;

namespace HfilesMedicalDashboard_Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthService _authDal;
        private readonly IConfiguration _config;

        public AuthController(IAuthService authDal, IConfiguration config)
        {
            _authDal = authDal;
            _config = config;
        }
 
        [HttpPost("signup")]
        public async Task<IActionResult> Signup([FromBody] SignupModel model)
        {
            if (model == null) return BadRequest(new { message = "Invalid payload" });
            if (string.IsNullOrWhiteSpace(model.Email) || string.IsNullOrWhiteSpace(model.Password) ||
                string.IsNullOrWhiteSpace(model.FullName))
            {
                return BadRequest(new { message = "FullName, Email and Password are required." });
            }

            
            int newId;
            try
            {
                newId = await _authDal.CreateUserAsync(model);
            }
            catch (Exception ex)
            {
                
                return BadRequest(new { message = ex.Message });
            }

            if (newId <= 0)
                return StatusCode(500, new { message = "Could not create user" });

            
            var created = await _authDal.LoginUser(model.Email);
            if (created == null) return StatusCode(500, new { message = "User created but cannot be retrieved." });

            // generate jwt
            var token = JwtHelper.GenerateToken(created.Id, created.Email, created.FullName, _config);

            return Ok(new
            {
                token,
                user = new { created.Id, created.FullName, created.Email }
            });
        }

      
        //[Authorize]
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            if (model == null) return BadRequest(new { message = "Invalid payload" });
            if (string.IsNullOrWhiteSpace(model.Email) || string.IsNullOrWhiteSpace(model.Password))
                return BadRequest(new { message = "Email and Password are required." });

            var user = await _authDal.LoginUser(model.Email);
            if (user == null)
                return Unauthorized(new { message = "Invalid credentials" });

            if (string.IsNullOrEmpty(user.PasswordHash))
                return StatusCode(500, new { message = "User password not set" });

            // "verify Password using BCryptHelper: "
            bool ok = BCryptHelper.Verify(model.Password, user.PasswordHash);
            if (!ok) return Unauthorized(new { message = "Invalid credentials" });

            var token = JwtHelper.GenerateToken(user.Id, user.Email, user.FullName, _config);


            // abhay 

            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Secure = true,  
                SameSite = SameSiteMode.None,  
                Expires = DateTime.UtcNow.AddMinutes(Convert.ToDouble(_config["Jwt:ExpiryMinutes"]))
            };
            Response.Cookies.Append("token", token, cookieOptions);


            return Ok(new
            {
                token,
                user = new { user.Id, user.FullName, user.Email }
            });
        }
    }
}
 



 
