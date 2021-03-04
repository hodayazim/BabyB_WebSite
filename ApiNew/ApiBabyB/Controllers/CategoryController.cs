using Bl;
using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiBabyB.Controllers
{
    public class CategoryController : ApiController
    {
        [HttpGet]
        [Route("api/Category/GetAllCategories")]
        public List<Dto.Category> GetAllCategories()
        {
            return CategoriesBl.GetAllCategories();
        }

        //[HttpGet]
        //[Route("api/Category/GetAllCategories")]
        //public List<string> GetAllCategories()
        //{
        //    using (Baby_BEntities1 db = new Baby_BEntities1())
        //    {
        //        var Categories = db.Category.Select(c => c.NameCategory).ToList<String>();
        //        return Categories;
        //    }
        //}

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

        public void Delete(int id)
        {
        }


        //[HttpGet]
        //[Route("api/Category/GetIdSubCategory/{nameSubCategory}")]
        //public int GetIdSubCategory(string nameSubCategory)
        //{
        //    using (Baby_BEntities1 db = new Baby_BEntities1())
        //    {
        //        int idSubCategory = db.SubCategory.Where(c=>c.NameSubCategory==nameSubCategory).Select(c => c.IdSubCategory).FirstOrDefault();
        //        return idSubCategory;
        //    }
        //}

        [HttpGet]
        [Route("api/Category/GetSubCategories/{selectedCategory}")]
        public List<string> GetSubCategories([FromUri] string selectedCategory)
        {
            using (Baby_BEntities db = new Baby_BEntities())
            {
                Category ccc = db.Category.First(cc => cc.NameCategory == selectedCategory);
                int id = ccc.IdCategory;
                List<SubCategory> subcategory = new List<SubCategory>();
                subcategory = db.SubCategory.Where(ss => ss.IdCategory == id).ToList();
                List<string> subcategorys = new List<string>();
                foreach (var item in subcategory)
                {
                    subcategorys.Add(item.NameSubCategory);
                }
                return subcategorys;
                //string idCategoryw = db.Category.Where(cc => cc.NameCategory == selectedCategory).Select(cc => cc.IdCategory).ToString();

                //int idCategorywj =Convert.ToInt32(db.Category.Where(c => c.NameCategory == selectedCategory).Select(c => c.IdCategory).ToString());

                //int idCategory =Convert.ToInt32( db.Category.Where(c=>c.NameCategory==selectedCategory).Select(c => c.IdCategory));
                //var SubCategory = db.SubCategory.Where(c => c.IdCategory==idCategory).Select(c=>c.NameSubCategory).ToList<String>();            
                // return SubCategory;
            }
        }
    }
}
