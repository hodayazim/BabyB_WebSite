using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bl
{
    public class ProductsBl
    {
        public static List<Product> GetAllProducts(int IdCategory)
        {
            List<Dal.Products> Products = Dal.ProductsDal.GetAllProducts(IdCategory);
            return Dto.Convert.ProductConvert.AllProductsToDto(Products);
        }

        public static List<Product> GetAllProductsWithoutSearch()
        {
            List<Dal.Products> Products = Dal.ProductsDal.GetAllProductsWithoutSearch();
            return Dto.Convert.ProductConvert.AllProductsToDto(Products);
        }

        public static List<Product> SearchProductsByString(string stringOfProduct)
        {
            List<Dal.Products> ListProduct = Dal.ProductsDal.SearchProductsByString(stringOfProduct);
            return Dto.Convert.ProductConvert.AllProductsToDto(ListProduct);

            throw new NotImplementedException();
        }

        //מביא מוצרים לפי שם קטגוריה
        public static List<Product> GetProductsByStr(string categoryName)
        {
            List<Dal.Products> ListProduct = Dal.ProductsDal.GetProductsByStr(categoryName);
            return Dto.Convert.ProductConvert.AllProductsToDto(ListProduct);

            throw new NotImplementedException();
        }

        public static Product GetProductById(int idProduct)
        {
            Dal.Products RequestedProduct = Dal.ProductsDal.GetProductById(idProduct);
            return Dto.Convert.ProductConvert.ProductToDto(RequestedProduct);

            throw new NotImplementedException();
        }
    }
}
