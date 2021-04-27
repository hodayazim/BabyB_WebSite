using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public static class ProductImageDal
    {
        public static bool AddProductImages(string[] Images)
        {
            int idProduct = Convert.ToInt32(Images[(Images.Length) - 1]);
            using (Baby_BEntities db = new Baby_BEntities())
            {
                for (int i = 0; i < Images.Length - 1; i++)
                {
                    ProductImage im = new ProductImage();
                    im.IdProduct = idProduct;
                    im.PathImage = "/images/" + System.IO.Path.GetFileName(Images[i]);
                    db.ProductImage.Add(im);
                }
                try

                {
                    db.SaveChanges();
                    return true;
                }
                //catch (Exception e)
                catch
                {
                    return false;
                }
            }
        }

        public static List<ProductImage> GetImagesProduct(int idProduct)
        {
            List<ProductImage> Images = new List<ProductImage>();
            using (Baby_BEntities db = new Baby_BEntities())
            {

                return (from p in db.ProductImage
                        where p.IdProduct == idProduct
                        select new { IdProduct = p.IdProduct, IdProductImage = p.IdProductImage, PathImage = p.PathImage }).AsEnumerable().Select(p => new ProductImage { IdProduct = p.IdProduct, IdProductImage = p.IdProductImage, PathImage = p.PathImage }).ToList();


                //return (from p in db.Set<ProductImage>()
                //        where p.IdProduct == idProduct
                //        select new ProductImage { IdProduct = p.IdProduct }).ToList();


                //Images = db.ProductImage.Where(IP => IP.IdProduct == idProduct).Select(I => new ProductImage
                //{
                //    IdProduct = I.IdProduct,
                //    IdProductImage = I.IdProductImage,
                //    PathImage = I.PathImage
                //}).ToList();
            }
            return Images;
        }
    }
}
