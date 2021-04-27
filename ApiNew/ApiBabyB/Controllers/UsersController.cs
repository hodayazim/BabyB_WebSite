using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;
using System.Web.Http;
using System.Web.Http.Cors;


namespace ApiBabyB.Controllers
{
    [EnableCors("*", "*", "*")]

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
                User User = Bl.UsersBl.GetUser(EMail, UserPassword);
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
            sendEmail("g", "d");
            return Bl.UsersBl.Register(register);

        }

        /*--------------------------------------------------*/
        private static AlternateView Mail_Body(string survayId)
        {

            string str = @"  
            <h2>שלום וברכה,</h2>
            <p>אנו שמחים שהצטרפת למשפחת BABY B</p>
            <p>החל מהיום תוכל לקנות מגוון רחב של מוצרים באיכות ובנוחות</p>
            <p>http://localhost:3000/</p>
            <h3>תיהנו!</h3>
            ";
            AlternateView AV =
         AlternateView.CreateAlternateViewFromString(str, null, MediaTypeNames.Text.Html);
            return AV;
        }

        public static bool sendEmail(string email, string survayId)
        {
            email = "hodayazim.m@gmail.com";
            MailMessage msg = new MailMessage();
            msg.From = new MailAddress("babyb.site@gmail.com");
            msg.To.Add(new MailAddress(email));
            msg.Subject = "it's working!";
            msg.IsBodyHtml = true;
            msg.AlternateViews.Add(Mail_Body(survayId));
            SmtpClient client = new SmtpClient();
            client.UseDefaultCredentials = true;
            client.Host = "smtp.gmail.com";
            client.Port = 587;
            client.EnableSsl = true;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.Credentials = new NetworkCredential("babyb.site@gmail.com", "BabyBWEbSite");
            msg.BodyEncoding = Encoding.Default;
            try
            {
                client.Send(msg);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
            finally
            {
                msg.Dispose();
            }

        }

        //public static bool SendEmailsToContact(SendEmail mailList)
        //{
        //    bool isSucces = false;
        //    List<string> emails = mailList.contact.ToList<string>();
        //    int i = 0;
        //    for (i = 0; i < emails.Count; i++)
        //    {
        //        isSucces = sendEmail(emails[i], mailList.survayId);
        //    }
        //    return isSucces;
        //}


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
