﻿using AdIntegration.Data.Entities.WhatsApp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdIntegration.Repository.Interfaces.WhatsApp;

public interface IWhatsAppUserRepository
{
    public Task<WhatsAppUser> AddWhatsAppUser(WhatsAppUser user);
    public Task<WhatsAppUser> UpdateWhatsAppUserById(int id, WhatsAppUser user);
    public Task<WhatsAppUser> DeleteWhatsAppUserById(int id);
    public Task<WhatsAppUser> GetWhatsAppUserById(int id);
    public Task<IEnumerable<WhatsAppUser>> GetWhatsAppUsers();
}
