using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class CategoryDal
    {
        public static List<Dal.Category> GetAllCategories()
        {
            List<Dal.Category> Categories = new List<Category>();

            using (Baby_BEntities db = new Baby_BEntities())
            {

                Categories = (from cat in db.Category   
                              where cat.NameCategory != null
                              select  cat).ToList();

            }
            return Categories;
        }
    }
}

