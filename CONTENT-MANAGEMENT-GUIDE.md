# 📝 Content Management Guide

## 🎯 **How Content Updates Work**

Your setup uses **Sanity** as a headless CMS, which means:
- ✅ **Content changes are instant** - No need to rebuild your website
- ✅ **API-driven** - Your deployed site fetches fresh content from Sanity's API
- ✅ **Global CDN** - Content is served fast worldwide

## 🔄 **Content Update Workflow**

### **Current Setup (Local Studio)**
```bash
cd cora-studio
npm run dev
# Opens studio at http://localhost:3333
```

**Pros:**
- ✅ Works immediately
- ✅ Full control

**Cons:**
- ❌ Only works on your computer
- ❌ Must run `npm run dev` each time
- ❌ Can't update content when away from your computer

### **Recommended: Deploy Studio to Sanity Hosting**

#### **Step 1: Login to Sanity**
```bash
cd cora-studio
npx sanity login
```

#### **Step 2: Deploy Studio**
```bash
npm run deploy
```

#### **Step 3: Choose Studio URL**
You'll get a hosted studio at:
- `https://your-project-name.sanity.studio`
- Or custom domain like `https://admin.coracolvin.com`

## 🌟 **Benefits of Hosted Studio**

1. **Access Anywhere**: Update content from any computer/device
2. **Team Access**: Share with others (photographers, assistants)
3. **Always Available**: No need to run local servers
4. **Professional**: Clean admin URL for content management
5. **Secure**: Sanity handles authentication and security

## 📱 **Content Management Options**

### **Option 1: Hosted Studio (Recommended)**
- **URL**: `https://your-project-name.sanity.studio`
- **Access**: From any browser, anywhere
- **Perfect for**: Regular content updates, team collaboration

### **Option 2: Local Studio**
- **Command**: `cd cora-studio && npm run dev`
- **URL**: `http://localhost:3333`
- **Perfect for**: Development, testing, offline work

### **Option 3: Sanity Mobile App**
- **Download**: Sanity Studio app from App Store/Play Store
- **Login**: Use your Sanity account
- **Perfect for**: Quick updates on-the-go

## 🔄 **Typical Content Update Process**

1. **Open Studio** (hosted or local)
2. **Edit Content**:
   - Add new gallery images
   - Create/update recipes
   - Modify any content
3. **Publish Changes**
4. **Changes are live immediately** on your website! 🎉

## 📊 **What You Can Update**

### **Gallery Items**
- Upload new photos
- Change alt text
- Reorder images

### **Recipes**
- Add new recipes with PDFs
- Update descriptions
- Mark recipes as featured
- Categorize recipes

### **Content is Instant**
- No need to rebuild your website
- No FTP uploads required
- Changes appear immediately

## ⚙️ **Advanced: Custom Domain for Studio**

You can also set up a custom domain like `admin.coracolvin.com`:

1. Deploy studio: `npm run deploy`
2. Configure DNS to point to Sanity
3. Update studio settings in Sanity dashboard

## 🔐 **Security & Access**

- **Your Sanity account** controls who can edit content
- **Invite team members** through Sanity dashboard
- **Role-based permissions** (admin, editor, viewer)
- **Audit logs** track all changes

## 🚀 **Next Steps**

1. **Deploy studio**: `npm run deploy` (recommended)
2. **Test content updates**: Add a gallery item or recipe
3. **Check your live site**: See changes appear instantly
4. **Bookmark studio URL**: For easy access

## 📞 **Support**

If you have issues:
- Check Sanity status: [status.sanity.io](https://status.sanity.io)
- Sanity docs: [sanity.io/docs](https://sanity.io/docs)
- Local studio: Always works as backup

**The beauty of this setup**: Your website stays fast and static (perfect for FTP), but content management is modern and professional! 🎉
