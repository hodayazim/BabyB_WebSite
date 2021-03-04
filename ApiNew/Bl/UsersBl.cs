using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bl
{
   public class UsersBl

    {
        public static User GetUser(string mail, string password)
        {
            Dal.Users user= Dal.UsersDal.GetUser(mail, password);
           return Dto.Convert.UserConvert.UsersToDto(user);
        }

        public static bool CheckDuplicateUser(string eMail)
        {
            return Dal.UsersDal.CheckDuplicateUser(eMail);
        }

        public static int Register(Users register)
        {
            //convert
            //Dal.UsersDal.Register(register);
            return Dal.UsersDal.Register(register);
           
        }

        public static List<Dto.User> GetAllUsers()
        {
            List<Users> ListUsers = Dal.UsersDal.GetAllUsers();
            return Dto.Convert.UserConvert.AllUsersToDto(ListUsers);
        }
    }
}
