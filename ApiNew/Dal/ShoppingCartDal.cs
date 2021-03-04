
using System;
using System.Collections.Generic;
using System.Linq;

namespace Dal
{
    public class ShoppingCartDal
    {
        public static List<ShoppingCart> GetAllShoppingCart(int idUser)
        {
            throw new NotImplementedException();
        }

        public static List<ShoppingCart> GetShopping(int id)
        {
            using (Baby_BEntities db = new Baby_BEntities())
            {
               
                List<ShoppingCart> userList = db.ShoppingCart.Where(s => s.IdUser == id).ToList();
                return userList;
            }
        }

    }
}