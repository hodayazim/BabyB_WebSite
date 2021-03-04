using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class ProductsDal
    {
        public static List<Dal.Products> GetAllProducts(int IdCategory)
        {
            List<Products> L = new List<Products>();
            List<int> IdSubCategory = new List<int>();
            //List<Dto.ProductImage> Images = new List<Dto.ProductImage>();
            List<ProductImage> ProductImages = new List<ProductImage>();

            using (Baby_BEntities db = new Baby_BEntities())
            {

                IdSubCategory = db.SubCategory.Where(u => u.IdCategory == IdCategory).Select(o => o.IdSubCategory).ToList();

                foreach (var item in db.Products)
                {
                    for (int i = 0; i < IdSubCategory.Count(); i++)
                    {
                        if (item.IdSubcategory == IdSubCategory[i])
                            L.Add(item);
                        { //    //Images.Clear();
                          //    //ProductImages = db.ProductImage.Where(o => o.IdProduct == item.IdProduct).ToList();
                          //    //Dto.ProductImage  im= new Dto.ProductImage();
                          //    //im.PathImage = ProductImages[0].PathImage;
                          //    //Images.Add(im);


                            //    //Product p = new Product();
                            //    //p.Price = item.Price;
                            //    //p.NameProduct = item.NameProduct;
                            //    //p.IdProduct = item.IdProduct;
                            //    //p.DescriptionProduct = item.DescriptionProduct;
                            //    //ProductImages = db.ProductImage.Where(o => o.IdProduct == item.IdProduct).ToList();
                            //    //p.ProductImage = Images;
                            //    //L.Add(p);
                            //}
                        }
                    }
                }
            }
            return L;
        }

        public static Products GetProductById(int idProduct)
        {
            Products RequestedProduct = new Products();
            using (Baby_BEntities db = new Baby_BEntities())
            {
                RequestedProduct = db.Products.Where(p => p.IdProduct == idProduct).FirstOrDefault();
                return RequestedProduct;
            }
        }

        public static List<Products> GetProductsByStr(string categoryName)
        {
            List<Dal.Products> products = new List<Products>();
            using (Baby_BEntities db = new Baby_BEntities())
            {
                int categoryId = db.Category.Where(cc => cc.NameCategory == categoryName).Select(c => c.IdCategory).FirstOrDefault();
                List<int> subcategory = new List<int>();
                subcategory = db.SubCategory.Where(ss => ss.IdCategory == categoryId).Select(p => p.IdSubCategory).ToList();

                foreach (var item in subcategory)
                {
                    products.AddRange(db.Products.Where(p => p.IdSubcategory == item).ToList());
                }
            }
            return products;
        }

        public static List<Dal.Products> GetAllProductsWithoutSearch()
        {
            List<Dal.Products> products = new List<Products>();
            using (Baby_BEntities db = new Baby_BEntities())
            {
                products = db.Products.ToList();
            }
            return products;
        }

        public static List<Products> SearchProductsByString(string stringOfProduct)
        {
            List<string> NamesOfProduct = new List<string>();
            List<Products> ListOfProduct = new List<Products>();

            using (Baby_BEntities db = new Baby_BEntities())
            {

                NamesOfProduct = db.Products.Select(n => n.NameProduct).ToList();
                foreach (var item in db.Products)
                {
                    if (item.NameProduct.Contains(stringOfProduct))
                        ListOfProduct.Add(item);
                }
                //NamesOfProduct = db.Products.Select(n => n.NameProduct).ToList();
                //foreach (var item in db.Products)
                //{
                //    for (int i = 0; i < NamesOfProduct.Count(); i++)
                //    {
                //        if (item.NameProduct.Contains(stringOfProduct))
                //            ListOfProduct.Add(item);
                //    }
                //}
            }
            return ListOfProduct;
        }
    }
}
