using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class User
    {
        public int IdUser { get; set; }
        public Nullable<int> IdAccount { get; set; }
        public string FirstNameUser { get; set; }
        public string LastNameUser { get; set; }
        public string UserPassword { get; set; }
        public int? UserStatus { get; set; }
        public string EMail { get; set; }
        public bool? GetPostMail { get; set; }
        public Nullable<short> TotalPayments { get; set; }
    }
}
