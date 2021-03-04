using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bl
{
    public static class CategoriesBl
    {
        public static List<Dto.Category> GetAllCategories()
        {
            List<Dal.Category> Categories = new List<Dal.Category>();
            Categories= Dal.CategoryDal.GetAllCategories();
             return Dto.Convert.CategoryConvert.AllCategorysToDto(Categories);
        }
    }
}
