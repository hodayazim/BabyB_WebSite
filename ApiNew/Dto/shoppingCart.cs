using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class ShoppingCart
    {
        public int IdShoppingCart { get; set; }
        public Nullable<int> IdUser { get; set; }
        public Nullable<int> IdProduct { get; set; }
        public string NameProduct { get; set; }
        public string Category { get; set; }
        public string Subcategory { get; set; }
        public Nullable<int> AmountOfPurchases { get; set; }
        public byte[] ImageOfProduct { get; set; }
        public string Company { get; set; }
        public Nullable<System.DateTime> DateAdded { get; set; }
        public string Color { get; set; }
        public Nullable<decimal> Price { get; set; }
        public Nullable<byte> size { get; set; }
        public Nullable<byte> DiscountPercentage { get; set; }

        public virtual ICollection<OldOrders> OldOrders { get; set; }
        public virtual OrdersProducts OrdersProducts { get; set; }
        public virtual Products Products { get; set; }

    }
}
