using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.Convert
{
    public static class ProductImageConvert
    {
        public static List<Dto.ProductImage> ImagesToDto(List<Dal.ProductImage> ListImagesDal)
        {
            List<Dto.ProductImage> ListImagesDto = new List<ProductImage>();
            foreach (var item in ListImagesDal)
            {
                Dto.ProductImage ImagesDto = new ProductImage();
                ImagesDto.IdProduct = item.IdProduct;
                ImagesDto.IdProductImage = item.IdProductImage;
                ImagesDto.PathImage = item.PathImage;
                ListImagesDto.Add(ImagesDto);

            }
            return ListImagesDto;
        }

        public static List<Dal.ProductImage> ImagesToDal(List<Dto.ProductImage> ListImagesDto)
        {
            List<Dal.ProductImage> ListImagesDal = new List<Dal.ProductImage>();
            foreach (var item in ListImagesDto)
            {
                Dto.ProductImage ImagesDto = new ProductImage();
                ImagesDto.IdProduct = item.IdProduct;
                ImagesDto.IdProductImage = item.IdProductImage;
                ImagesDto.PathImage = item.PathImage;
            }
            return ListImagesDal;
        }

        public static Dto.ProductImage ImageToDto(Dal.ProductImage item)
        {
            Dto.ProductImage ImageDto = new ProductImage();
            ImageDto.IdProduct = item.IdProduct;
            ImageDto.IdProductImage = item.IdProductImage;
            ImageDto.PathImage = item.PathImage;
            return ImageDto;
        }

        public static Dal.ProductImage ImageToDal(Dto.ProductImage item)
        {
            Dal.ProductImage ImageDal = new Dal.ProductImage();
            ImageDal.IdProduct = item.IdProduct;
            ImageDal.IdProductImage = item.IdProductImage;
            return ImageDal;
        }
    }
}
