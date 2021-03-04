using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto.Convert
{
    public static class UserConvert
    {
            public static List<Dto.User> AllUsersToDto(List<Dal.Users> UsersDal)
            {
                List<Dto.User> UsersDto = new List<Dto.User>();
                foreach (var item in UsersDal)
                {
                    Dto.User UserDto = new Dto.User();
                    UserDto.IdUser = item.IdUser;
                    UserDto.IdAccount = item.IdAccount;
                    UserDto.FirstNameUser = item.FirstNameUser;
                    UserDto.LastNameUser = item.LastNameUser;
                    UserDto.UserPassword = item.UserPassword;
                    UserDto.UserStatus = item.UserStatus;
                    UserDto.EMail = item.EMail;
                    UserDto.GetPostMail = item.GetPostMail;
                    UserDto.TotalPayments = item.TotalPayments;
                    UsersDto.Add(UserDto);
                }
                return UsersDto;
            }
            public static List<Dal.Users> AllUsersToDal(List<Dto.User> ProductsDto)
            {
                List<Dal.Users> UsersDal = new List<Dal.Users>();
                foreach (var item in ProductsDto)
                {
                    Dal.Users UserDal = new Dal.Users();
                    UserDal.IdUser = item.IdUser;
                    UserDal.IdAccount = item.IdAccount;
                    UserDal.FirstNameUser = item.FirstNameUser;
                    UserDal.LastNameUser = item.LastNameUser;
                    UserDal.UserPassword = item.UserPassword;
                    UserDal.UserStatus = item.UserStatus;
                    UserDal.EMail = item.EMail;
                    UserDal.GetPostMail = item.GetPostMail;
                    UserDal.TotalPayments = item.TotalPayments;
                    UsersDal.Add(UserDal);
                }
                return UsersDal;
            }
            public static Dto.User UsersToDto(Dal.Users item)
            {
                Dto.User UserDto = new Dto.User();
                UserDto.IdUser = item.IdUser;
                UserDto.IdAccount = item.IdAccount;
                UserDto.FirstNameUser = item.FirstNameUser;
                UserDto.LastNameUser = item.LastNameUser;
                UserDto.UserPassword = item.UserPassword;
                UserDto.UserStatus = item.UserStatus;
                UserDto.EMail = item.EMail;
                UserDto.GetPostMail = item.GetPostMail;
                UserDto.TotalPayments = item.TotalPayments;
                return UserDto;
            }
            public static Dal.Users UsersToDal(Dto.User item)
            {

            Dal.Users UserDal = new Dal.Users();
            UserDal.IdUser = item.IdUser;
            UserDal.IdAccount = item.IdAccount;
            UserDal.FirstNameUser = item.FirstNameUser;
            UserDal.LastNameUser = item.LastNameUser;
            UserDal.UserPassword = item.UserPassword;
            UserDal.UserStatus = item.UserStatus;
            UserDal.EMail = item.EMail;
            UserDal.GetPostMail = item.GetPostMail;
            UserDal.TotalPayments = item.TotalPayments;
            return UserDal;
        }
        }
    }
