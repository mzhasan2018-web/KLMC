using Microsoft.AspNetCore.Mvc;

namespace KLMC.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HealthController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new
            {
                status = "OK",
                message = "KLMC API is running",
                timestamp = DateTime.UtcNow
            });
        }
    }
}