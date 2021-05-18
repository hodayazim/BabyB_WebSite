using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bl
{
    public static class ProductImageBl
    {
        // לפתוח אחרי הבדיקה
        public static bool AddProductImages(string[] Images)
        {
            return ProductImageDal.AddProductImages(Images);
        }

        public static List<Dto.ProductImage> GetImagesProduct(int idProduct)
        {
            List<Dal.ProductImage> ProductImages = ProductImageDal.GetImagesProduct(idProduct);
            return Dto.Convert.ProductImageConvert.ImagesToDto(ProductImages);
        }

        public static bool DeleteProductImages(int idProduct)
        {
            return ProductImageDal.DeleteProductImage(idProduct);
        }
    }
}
