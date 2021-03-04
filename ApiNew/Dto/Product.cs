using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class Product
    {
        public int IdProduct { get; set; }
        public string BarcodeProduct { get; set; }
        public int IdSubcategory { get; set; }
        public string NameProduct { get; set; }
        public string DescriptionProduct { get; set; }
        public short? UnitsInStock { get; set; }
        public byte? DiscountPercentage { get; set; }
        public List<string> Images { get; set; }
        public float? Price { get; set; }
        public string Color { get; set; }
        public string Company { get; set; }
        public string size { get; set; }
        public virtual ICollection<ProductImage> ProductImage { get; set; }

    }
}
