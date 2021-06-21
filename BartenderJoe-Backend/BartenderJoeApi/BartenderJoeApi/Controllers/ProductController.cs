using BartenderJoeApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;

namespace BartenderJoeApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private List<Product> _products = null;
        private readonly ILogger<ProductController> _logger;
        public ProductController(ILogger<ProductController> logger)
        {
            _products = new List<Product>();
            _products.Add(new Product()
            {
                ProductId = 1,
                ProductName = "Milk",
                MixedProduct = "Milk Shake",
                IsMixed = false
            });
            _products.Add(new Product()
            {
                ProductId = 2,
                ProductName = "Orange",
                MixedProduct = "Orange Juice",
                IsMixed = false
            });
            _products.Add(new Product()
            {
                ProductId = 3,
                ProductName = "Banana",
                MixedProduct = "Banana Milk Shake",
                IsMixed = false
            });
            _logger = logger;
        }
        [HttpGet("getproduct/{id}")]
        public IActionResult Get(int id)
        {
            if (id > 0
                && _products.Count > id - 1)
            {
                var prod = _products.Where(obj => obj.ProductId == id).FirstOrDefault<Product>();
                return Ok(prod);
            }                
            //Need to update in future
            //return BadRequest("INVALID PROD TP");
            return Ok(new Product()
            {
                ProductId = 0,
                ProductName = "INAVLID PROD TP",
                MixedProduct = "CANNOT MIX IT"
            });
        }
    }
}
