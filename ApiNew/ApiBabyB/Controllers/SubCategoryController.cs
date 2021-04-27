using Dal;
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
    public class SubCategoryController : ApiController
    {
        [HttpGet]
        [Route("api/SubCategory/GetIdSubCategory/{nameSubCategory}")]
        public int GetIdSubCategory(string nameSubCategory)
        {
            using (Baby_BEntities db = new Baby_BEntities())
            {
                int idSubCategory = db.SubCategory.Where(c => c.NameSubCategory == nameSubCategory).Select(c => c.IdSubCategory).FirstOrDefault();
                return idSubCategory;
            }
        }
    }
}
