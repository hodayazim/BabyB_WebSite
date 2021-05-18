using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ApiBabyB.Controllers
{
    [EnableCors("*", "*", "*")]
    public class ProductsController : ApiController
    {

        [HttpGet]
        [Route("api/Product/GetAllProducts/{IdCategory}")]
        public List<Product> GetAllProducts([FromUri]int IdCategory)
        {
            return Bl.ProductsBl.GetAllProducts(IdCategory);
        }

        //שליחת מוצרים לפי שם הקטגוריה
        [HttpGet]
        [Route("api/Product/GetProductsByStr/{CategoryName}")]
        public List<Product> GetProductsByStr([FromUri]string CategoryName)
        {
            return Bl.ProductsBl.GetProductsByStr(CategoryName);
        }


        //מחזירה רשימה של כל המוצרים למחיקה בלי סינון
        [HttpGet]
        [Route("api/Product/GetAllProductsWithoutSearch")]
        public List<Product> GetAllProductsWithoutSearch()
        {
            return Bl.ProductsBl.GetAllProductsWithoutSearch();
        }

        //לפני ה outocomplete
        [HttpGet]
        [Route("api/Products/GetSearchProducts/{StringOfProduct}")]
        public List<Product> GetSearchProducts([FromUri] string StringOfProduct)
        {
            return Bl.ProductsBl.SearchProductsByString(StringOfProduct);
        }

        // id שולף את המוצר המבוקש
        [HttpGet]
        [Route("api/Products/GetProductById/{IdProduct}")]
        public Product GetProductById([FromUri] int IdProduct)
        {
            return Bl.ProductsBl.GetProductById(IdProduct);
        }

        //שולף מוצרים ששמורים בעגלת קניות
        [HttpGet]
        [Route("api/Products/GetListOfProductById")]
        public List<Product> GetListOfProductById([FromUri] int[] IdProducts)
        {
            return Bl.ProductsBl.GetListOfProductById(IdProducts);
        }


        //מכניס מוצרים חדשים
        [HttpPost]
        [Route("api/Products/AddProducts")]
        public int AddProducts([FromBody] Products product)
        {
            using (Baby_BEntities db = new Baby_BEntities())
            {
                try
                {
                    db.Products.Add(product);
                    db.SaveChanges();
                    return product.IdProduct;
                }
                catch (Exception e)
                {
                    return 0;
                }

            }
        }

        [HttpDelete]
        [Route("api/Products/DeleteProductById/{IdProduct}")]
        public bool DeleteProductById([FromUri]int idProduct)
        {
            ProductImageController.DeleteProductImage(idProduct);
            return Bl.ProductsBl.DeleteProductById(idProduct);
        }

        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        public string Get(int id)
        {
            return "value";
        }

        public void Post([FromBody]string value)
        {
        }

        public void Put(int id, [FromBody]string value)
        {
        }


    }
}
