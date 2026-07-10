using KLMC.Api.Data;
using KLMC.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace KLMC.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public ContactController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        public async Task<IActionResult> Submit([FromBody] ContactRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.FullName))
                return BadRequest(new { message = "Full name is required." });

            if (string.IsNullOrWhiteSpace(request.Email))
                return BadRequest(new { message = "Email is required." });

            if (string.IsNullOrWhiteSpace(request.Message))
                return BadRequest(new { message = "Message is required." });

            var enquiry = new ContactEnquiry
            {
                FullName = request.FullName,
                Email = request.Email,
                Phone = request.Phone,
                Message = request.Message,
                CreatedAtUtc = DateTime.UtcNow
            };

            _dbContext.ContactEnquiries.Add(enquiry);
            await _dbContext.SaveChangesAsync();

            return Ok(new
            {
                message = "Contact enquiry submitted successfully.",
                id = enquiry.Id
            });
        }
    }
}