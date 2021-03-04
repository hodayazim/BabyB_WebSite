using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiBabyB.Controllers
{
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

        //[HttpPost]
        //[Route("api/ShoppingCart/Login")]


        //public int Login([FromBody] Users user)
        //{
        //    int idUser = Bl.ShoppingCartBl.GetUser(user.EMail, "1055");
        //    if (idUser != 0)
        //        return idUser;
        //    return 0;
        //}

            

        //[HttpGet]
        //[Route("api/ShoppingCart/GetShopping/{IdUser}")]

        //public List<Dto.ClassShoppingCart> GetShopping([FromUri] int IdUser)
        //{
        //        List<Dal.ShoppingCart> mylist = Bl.ShoppingCartBl.GetShopping(IdUser);
        //        if (mylist != null)
        //            return mylist;
        //        return null;
        //}


        [HttpGet]
        [Route("api/ShoppingCart/GetShoppingByIdUser/{IdUser}")]

        public List<Dto.ShoppingCart> GetShoppingByIdUser([FromUri] int IdUser)
        {
            return Bl.ShoppingCartBl.GetShoppingByIdUser(IdUser);
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
