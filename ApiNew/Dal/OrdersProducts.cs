//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dal
{
    using System;
    using System.Collections.Generic;
    
    public partial class OrdersProducts
    {
        public int IdShoppingCart { get; set; }
        public Nullable<int> IdProduct { get; set; }
        public string NameProduct { get; set; }
        public string Category { get; set; }
        public string Subcategory { get; set; }
        public string DescriptionProduct { get; set; }
        public Nullable<short> UnitsInStock { get; set; }
        public Nullable<decimal> Price { get; set; }
        public string Color { get; set; }
        public Nullable<byte> DiscountPercentage { get; set; }
        public byte[] ImageOfProduct { get; set; }
        public string Company { get; set; }
        public Nullable<byte> size { get; set; }
    
        public virtual ShoppingCart ShoppingCart { get; set; }
    }
}
