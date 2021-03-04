using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.Convert
{
    public static class ProductConvert
    {

        public static List<string> GetImagesByIdProduct(int idProduct)
        {
            List<string> Img = new List<string>();
            using (Baby_BEntities db = new Baby_BEntities())
            {
                Img = db.ProductImage.Where(c => c.IdProduct == idProduct).Select(c => c.PathImage).ToList();
            }
            return Img;
        }
        public static List<Dto.Product> AllProductsToDto(List<Dal.Products> ProductDal)
        {
            List<Dto.Product> ProductsDto = new List<Dto.Product>();
            foreach (var item in ProductDal)
            {

                Dto.Product ProductDto = new Dto.Product
                {
                    Images = GetImagesByIdProduct(item.IdProduct),
                    NameProduct = item.NameProduct,
                    IdProduct = item.IdProduct,
                    IdSubcategory = item.IdSubcategory,
                    UnitsInStock = item.UnitsInStock,
                    DiscountPercentage = item.DiscountPercentage,
                    DescriptionProduct = item.DescriptionProduct
                };
                //Dto.Product ProductDto = new Dto.Product();
                //ProductDto.Images = GetImagesByIdProduct(item.IdProduct);
                //ProductDto.IdProduct =item.IdProduct;
                //ProductDto.IdSubcategory =item.IdSubcategory;
                //ProductDto.UnitsInStock = item.UnitsInStock;
                //ProductDto.DiscountPercentage = item.DiscountPercentage;
                //ProductDto.DescriptionProduct = item.DescriptionProduct;
                //ProductDto.Price =item.Price;
                //ProductDto.size =item.size;
                //ProductDto.Color = item.Color;
                //ProductDto.Company = item.Company;
                ProductsDto.Add(ProductDto);
            }
            return ProductsDto;
        }
        public static List<Dal.Products> AllProductsToDal(List<Dto.Product> ProductsDto)
        {
            List<Dal.Products> ProductsDal = new List<Dal.Products>();
            foreach (var item in ProductsDto)
            {
                Dal.Products Product = new Dal.Products
                {
                    IdProduct = item.IdProduct,
                    IdSubcategory = item.IdSubcategory,
                    NameProduct = item.NameProduct,
                    UnitsInStock = item.UnitsInStock,
                    DiscountPercentage = item.DiscountPercentage,
                    DescriptionProduct = item.DescriptionProduct,
                    Color = item.Color,
                    Company = item.Company,
                    //Price=item.Price,
                    size = item.size,
                };

                //Dal.Products Product = new Dal.Products();
                //Product.IdProduct = item.IdProduct;
                //Product.IdSubcategory = item.IdSubcategory;
                //Product.UnitsInStock = item.UnitsInStock;
                //Product.DiscountPercentage = item.DiscountPercentage;
                //Product.DescriptionProduct = item.DescriptionProduct;
                ProductsDal.Add(Product);
            }
            return ProductsDal;
        }
        public static Dto.Product ProductToDto(Dal.Products item)
        {
            //Dto.Product ProductDto = new Dto.Product();
            //ProductDto.IdProduct = item.IdProduct;
            //ProductDto.IdSubcategory = item.IdSubcategory;
            //ProductDto.UnitsInStock = item.UnitsInStock;
            //ProductDto.DiscountPercentage = item.DiscountPercentage;
            //ProductDto.DescriptionProduct = item.DescriptionProduct;
            //return ProductDto;
            Dto.Product ProductDto = new Dto.Product
            {
                IdProduct = item.IdProduct,
                IdSubcategory = item.IdSubcategory,
                NameProduct = item.NameProduct,
                UnitsInStock = item.UnitsInStock,
                DiscountPercentage = item.DiscountPercentage,
                DescriptionProduct = item.DescriptionProduct,
                Color = item.Color,
                Company = item.Company,
                //Price=item.Price,
                size = item.size,
            };
            return ProductDto;
        }
        public static Dal.Products ProductToDal(Dto.Product item)
        {

            //Dal.Products Product = new Dal.Products()
            //Product.IdProduct = item.IdProduct;
            //Product.IdSubcategory = item.IdSubcategory;
            //Product.UnitsInStock = item.UnitsInStock;
            //Product.DiscountPercentage = item.DiscountPercentage;
            //Product.DescriptionProduct = item.DescriptionProduct;
            //return Product;
            Dal.Products Product = new Dal.Products()
            {
                IdProduct = item.IdProduct,
                IdSubcategory = item.IdSubcategory,
                NameProduct = item.NameProduct,
                UnitsInStock = item.UnitsInStock,
                DiscountPercentage = item.DiscountPercentage,
                DescriptionProduct = item.DescriptionProduct,
                Color = item.Color,
                Company = item.Company,
                //Price=item.Price,
                size = item.size,
            };
            return Product;
        }
    }
}

