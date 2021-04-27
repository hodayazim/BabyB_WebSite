
using System;
using System.Collections.Generic;
using System.Linq;

namespace Dal
{
    public class ShoppingCartDal
    {
        public static List<ShoppingCart> GetAllShoppingCart(int idUser)
        {
            using (Baby_BEntities db = new Baby_BEntities())
            {
                List<ShoppingCart> userList = db.ShoppingCart.Where(s => s.IdUser == idUser).ToList();
                return userList;
            }
        }

        public static int AddProductToCart(ShoppingCart productToCart)
        {
            using (Baby_BEntities db = new Baby_BEntities())
            {
                try
                {
                    db.ShoppingCart.Add(productToCart);
                    db.SaveChanges();
                    productToCart.DateAdded = DateTime.Today;
                    db.SaveChanges();
                    return productToCart.IdShoppingCart;
                }

                //catch (Exception e)
                catch
                {
                    return 0;
                }
            }
        }

        //public static List<ShoppingCart> GetShopping(int id)
        //{
        //    using (Baby_BEntities db = new Baby_BEntities())
        //    {

        //        List<ShoppingCart> userList = db.ShoppingCart.Where(s => s.IdUser == id).ToList();
        //        return userList;
        //    }
        //}

    }
}