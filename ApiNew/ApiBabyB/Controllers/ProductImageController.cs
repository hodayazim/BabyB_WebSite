﻿using Bl;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiBabyB.Controllers
{
    public class ProductImageController : ApiController
    {
        public class LinesParameter
        {
            public List<string> Lines { get; } = new List<string>();
        }

        [HttpPost]
        [Route("api/ProductImage/Addimages")]
        public bool Addimages([FromBody] string[] Images)
        {
            return ProductImageBl.AddProductImages(Images);
        }

        [HttpGet]
        [Route("api/ProductImage/GetImagesProduct/{IdProduct}")]
        public List<ProductImage> GetImagesProduct([FromUri] int IdProduct)
        {
            return ProductImageBl.GetImagesProduct(IdProduct);
        }
    }
}
