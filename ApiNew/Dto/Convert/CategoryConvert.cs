using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.Convert
{
    public static class CategoryConvert
    {
        public static List<Dto.Category> AllCategorysToDto(List<Dal.Category> categoriesDal)
        {
            List<Dto.Category> categoriesDto = new List<Category>();
            foreach (var item in categoriesDal)
            {
                Dto.Category categoryDto = new Dto.Category();
                categoryDto.IdCategory = item.IdCategory;
                categoryDto.NameCategory = item.NameCategory;
                categoriesDto.Add(categoryDto);
            }
            return categoriesDto;
        }

        public static List<Dal.Category> AllCategorysToDal(List<Dto.Category> categoriesDto)
        {
            List<Dal.Category> categoriesDal = new List<Dal.Category>();
            foreach (var item in categoriesDto)
            {
                Dal.Category categoryDal = new Dal.Category();
                categoryDal.IdCategory = item.IdCategory;
                categoryDal.NameCategory = item.NameCategory;
                categoriesDal.Add(categoryDal);
            }
            return categoriesDal;
        }

        public static Dto.Category CategoryToDto(Dal.Category item)
        { 
            Dto.Category CategoryDto = new Category();
            CategoryDto.IdCategory = item.IdCategory;
            CategoryDto.NameCategory = item.NameCategory;
            return CategoryDto;
        }

        public static Dal.Category CategoryToDal(Dto.Category item)
        {
            Dal.Category CategoryDal = new Dal.Category();
            CategoryDal.IdCategory = item.IdCategory;
            CategoryDal.NameCategory = item.NameCategory;
            return CategoryDal;
        }
    }
}
