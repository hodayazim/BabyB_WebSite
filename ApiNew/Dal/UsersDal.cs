using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class UsersDal
    {
        public static Users GetUser(string mail, string password)
        {
            using (Baby_BEntities db = new Baby_BEntities())
            {
                Users user = db.Users.Where(u => u.EMail == mail && u.UserPassword == password).FirstOrDefault();
                return user;
            }
        }

        public static bool CheckDuplicateUser(string eMail)
        {
            bool isDuplicate = false;
            using (Baby_BEntities db = new Baby_BEntities())
            {

                Users checkUser = db.Users.Where(u => u.EMail == eMail).FirstOrDefault();
                if (checkUser != null)
                {
                    isDuplicate = true;
                }
            }
            return isDuplicate;
        }

        public static List<Users> GetAllUsers()
        {
            List<Users> UsersList = new List<Users>();
            using (Baby_BEntities db = new Baby_BEntities())
            {
                UsersList = db.Users.ToList();
            }
            return UsersList;
        }


        public static int Register(Users register)
        {
            using (Baby_BEntities db = new Baby_BEntities())
            {
                try
                {
                    db.Users.Add(register);
                    db.SaveChanges();
                    int id = db.Users.Where(c => c.EMail == register.EMail && c.UserPassword == register.UserPassword).Select(c => c.IdUser).FirstOrDefault();
                    return id;
                }
                catch (Exception e)
                {
                    return 0;
                }
            }
        }
    }
}
