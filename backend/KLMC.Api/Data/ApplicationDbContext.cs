using KLMC.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace KLMC.Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<ContactEnquiry> ContactEnquiries => Set<ContactEnquiry>();
    }
}