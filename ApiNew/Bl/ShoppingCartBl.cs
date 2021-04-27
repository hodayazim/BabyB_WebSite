using Dto;
using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bl
{
    public class ShoppingCartBl
    {
        public static List<Dto.ShoppingCart> GetShoppingByIdUser(int idUser)
        {
            List<Dal.ShoppingCart> ShoppingCart = Dal.ShoppingCartDal.GetAllShoppingCart(idUser);
            return Dto.Convert.ShoppingCartConvert.AllShoppingcartToDto(ShoppingCart);
        }

        public static int AddProductToCart(Dal.ShoppingCart productToCart)
        {
            int IdShoppingCart = Dal.ShoppingCartDal.AddProductToCart(productToCart);
            return IdShoppingCart;
        }
    }
}
