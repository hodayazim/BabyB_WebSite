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
        [Route("api/SubCategory/GetIdSubCategory/{nameSubCategory}/{nameCategory}")]
        public int GetIdSubCategory(string nameSubCategory, string nameCategory)
        {
            using (Baby_BEntities db = new Baby_BEntities())
            {
                int idSubCategory = db.SubCategory.Where(c => c.NameSubCategory == nameSubCategory).Select(c => c.IdSubCategory).FirstOrDefault();
                if (idSubCategory != 0)
                {
                    return idSubCategory;
                }
                else
                {
                    int IdCategory = db.Category.Where(c => c.NameCategory == nameCategory).Select(c => c.IdCategory).FirstOrDefault();
                    SubCategory newSubCategory = new SubCategory();
                    newSubCategory.NameSubCategory = nameSubCategory;
                    newSubCategory.IdCategory = IdCategory;
                    db.SubCategory.Add(newSubCategory);
                    try
                    {
                        db.SaveChanges();
                        int idnewSubCategory = db.SubCategory.Where(c => c.NameSubCategory == nameSubCategory).Select(c => c.IdSubCategory).FirstOrDefault();
                        return idnewSubCategory;
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(e);
                        return 0;
                    }
                }
            }
        }
    }
}
