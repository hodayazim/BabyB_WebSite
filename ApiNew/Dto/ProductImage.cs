using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class ProductImage
    {
        public int IdProductImage { get; set; }
        public string PathImage { get; set; }
        public int? IdProduct { get; set; }
    }
}
