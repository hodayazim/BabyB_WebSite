using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.Convert
{
    public class ShoppingCartConvert
    {
        public static List<Dto.ShoppingCart> GetShoppings(List<Dal.ShoppingCart> shoppingDal)
        {
            List<Dto.ShoppingCart> s = new List<ShoppingCart>();
            if (shoppingDal == null)
                return null;
            foreach (var item in shoppingDal)
            {
                Dto.ShoppingCart ss = new ShoppingCart();
                ss.AmountOfPurchases = item.AmountOfPurchases;
                ss.Category = item.Category;
                ss.DateAdded = item.DateAdded;
                ss.DiscountPercentage = item.DiscountPercentage;
                ss.IdProduct = item.IdProduct;
                ss.Subcategory = item.Subcategory;
                ss.IdShoppingCart = item.IdShoppingCart;
                ss.IdUser = item.IdUser;
                //ss.ImageOfProduct = item.ImageOfProduct;
                //ss.NameProduct = item.NameProduct;
                //ss.Color = item.Color;
                //ss.Company = item.Company;
                //ss.Price = item.Price;
                //ss.size = item.size;
                s.Add(ss);
            }
            return s;
        }

        public static List<Dto.ShoppingCart> AllShoppingcartToDto(List<Dal.ShoppingCart> shoppingCartsDal)
        {
            List<Dto.ShoppingCart> shoppingCartsDto = new List<ShoppingCart>();
            foreach (var item in shoppingCartsDal)
            {
                Dto.ShoppingCart shoppingCartDto = new ShoppingCart
                {
                  IdShoppingCart = item.IdShoppingCart,
                  IdUser = item.IdUser,
                  IdProduct = item.IdProduct,
                  Category = item.Category,
                  Subcategory = item.Subcategory,
                  AmountOfPurchases = item.AmountOfPurchases,
                  DateAdded = item.DateAdded,
                  DiscountPercentage = item.DiscountPercentage
                };
                //Dto.ShoppingCart shoppingCartDto = new ShoppingCart();
                //shoppingCartDto.IdShoppingCart = item.IdShoppingCart;
                //shoppingCartDto.IdUser = item.IdUser;
                //shoppingCartDto.IdProduct = item.IdProduct;
                //shoppingCartDto.Category = item.Category;
                //shoppingCartDto.Subcategory = item.Subcategory;
                //shoppingCartDto.AmountOfPurchases = item.AmountOfPurchases;
                //shoppingCartDto.DateAdded = item.DateAdded;
                //shoppingCartDto.DiscountPercentage = item.DiscountPercentage;
                //shoppingCartDto.Color = item.Color;
                //shoppingCartDto.Price = item.Price;
                //shoppingCartDto.size = item.size;
                //shoppingCartDto.ImageOfProduct = item.ImageOfProduct;
                //shoppingCartDto.Company = item.Company;
                //shoppingCartDto.NameProduct = item.NameProduct;
            }
            return shoppingCartsDto;
        }
    }
}
