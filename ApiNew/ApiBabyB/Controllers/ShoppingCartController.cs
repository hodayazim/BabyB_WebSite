using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;


namespace ApiBabyB.Controllers
{
    [EnableCors("*", "*", "*")]

    public class ShoppingCartController : ApiController
    {
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        //[HttpGet]
        //[Route("api/ShoppingCart/Login/{EMail}")]

        //public int Login( string EMail)
        //{
        //   int idUser= Bl.ShoppingCartBl.GetUser(EMail, "1055");
        //    if (idUser != 0)
        //        return idUser;
        //    return 0;

        //}


        [HttpPost]
        [Route("api/ShoppingCart/AddProductToCart/")]
        public int AddProductToCart([FromBody] ShoppingCart productToCart)
        {
            return Bl.ShoppingCartBl.AddProductToCart(productToCart);
        }


        [HttpGet]
        [Route("api/ShoppingCart/GetShoppingByIdUser/{IdUser}")]

        public List<Dto.ShoppingCart> GetShoppingByIdUser([FromUri] int IdUser)
        {
            List < Dto.ShoppingCart > DtoShoppingCart= Bl.ShoppingCartBl.GetShoppingByIdUser(IdUser);
            return DtoShoppingCart;
            //try
            //{
            //    List<Dto.ShoppingCart> mylist = Bl.ShoppingCartBl.GetShopping(IdUser);
            //    if (mylist != null)
            //        return mylist;
            //    return null;
            //}
            //catch (Exception e)
            //{
            //    return null;
            //}
            //return null;
        }

        //[HttpGet]
        //[Route("api/User/Login/{EMail}/{UserPassword}")]
        //public int Login([FromUri]string EMail, [FromUri]string UserPassword)
        //{
        //    try
        //    {
        //        int idUser = Bl.ShoppingCartBl.GetUser(EMail, UserPassword);
        //        return idUser;

        //    }
        //    catch (Exception ex)
        //    {
        //        return 0;
        //    }
        //}

        public void Post([FromBody]string value)
        {
        }

        public void Put(int id, [FromBody]string value)
        {
        }

        public void Delete(int id)
        {
        }
    }
}
