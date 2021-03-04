using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiBabyB.Controllers
{
    public class UsersController : ApiController
    {
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet]
        [Route("api/User/Login/{EMail}/{UserPassword}")]
        public User Login([FromUri]string EMail, [FromUri]string UserPassword)
        {
            try
            {
                User User = Bl.UsersBl.GetUser (EMail, UserPassword);
                return User;

            }
            catch (Exception ex)
            {
                throw new Exception("error in function :Login " + ex.Message);
            }
        }

        [HttpPost]
        [Route("api/Users/Register")]

        public int Register([FromBody] Users register)
        {
            bool isDuplicate = Bl.UsersBl.CheckDuplicateUser(register.EMail);
            if (isDuplicate == true)
            {
                return -1;
            }
            return Bl.UsersBl.Register(register);
        }

        [HttpGet]
        [Route("api/Users/GetAllUsers")]

        public List<Dto.User> GetAllUsers()
        {
            return Bl.UsersBl.GetAllUsers();
        }

        [HttpGet]
        //[Route("user/CheckGet")]
        public string CheckGet()
        {
            return "value";
        }



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
