using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class Category
    {
        public int IdCategory { get; set; }
        public string NameCategory { get; set; }
        public virtual ICollection<SubCategory> SubCategory { get; set; }
    }
}
