﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace AdIntegration.Data.Entities
{
    [Table(nameof(ChannelType))]
    public class ChannelType
    {
        [Required]
        public string Type { get; set; }
        [Required]
        public int Amount { get; set; }
    }
}