# Deployment Guide - Naniya Technologies Website Update

## 📋 Quick Summary

The Naniya Technologies website has been successfully updated to showcase both products (Chama Platform and LipaClear) as LIVE with dedicated product pages and enhanced information.

**Local Changes:** ✅ Complete  
**Build Status:** ✅ Successful  
**Git Commits:** ✅ Complete  
**Ready to Deploy:** ✅ YES

---

## 🚀 Deployment Steps

### Option 1: Auto-Deploy via Vercel (Recommended)

The repository is connected to Vercel. Simply push to deploy:

```bash
cd /Users/isenberg/Documents/projects/naniya-website
git push origin main
```

**What happens next:**
1. Vercel detects the push to `main`
2. Automatically builds the Next.js site
3. Deploys to https://naniya.co.ke
4. Takes ~2-3 minutes

**Monitor deployment:**
- Visit: https://vercel.com/dashboard
- Check deployment logs for any issues
- Verify successful deployment

### Option 2: Manual Deploy via Vercel CLI

If you prefer manual deployment:

```bash
cd /Users/isenberg/Documents/projects/naniya-website
npm install -g vercel  # if not installed
vercel --prod
```

---

## ✅ Post-Deployment Checklist

### 1. Verify Pages Load
- [ ] Homepage: https://naniya.co.ke
- [ ] Chama Platform page: https://naniya.co.ke/products/chama-platform
- [ ] LipaClear page: https://naniya.co.ke/products/lipaclear
- [ ] Privacy page: https://naniya.co.ke/privacy
- [ ] Terms page: https://naniya.co.ke/terms

### 2. Test Functionality
- [ ] Mobile menu opens/closes properly
- [ ] All CTAs link to correct URLs:
  - Chama Platform → https://chama.naniya.co.ke
  - LipaClear → https://lipaclear.naniya.co.ke
- [ ] WhatsApp links work: https://wa.me/254701557978
- [ ] Email link works: info@naniya.co.ke
- [ ] Phone link works: +254 701 557 978

### 3. Test Responsiveness
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

### 4. Browser Testing
- [ ] Chrome/Edge
- [ ] Safari (macOS/iOS)
- [ ] Firefox
- [ ] Mobile browsers

### 5. SEO Verification
- [ ] Submit updated sitemap to Google Search Console
  - URL: https://search.google.com/search-console
  - Submit: https://naniya.co.ke/sitemap.xml
- [ ] Test structured data: https://search.google.com/test/rich-results
- [ ] Verify meta tags with: https://metatags.io/
- [ ] Check mobile-friendliness: https://search.google.com/test/mobile-friendly

### 6. Performance Testing
- [ ] Test with Lighthouse (aim for 90+ scores)
- [ ] Check page load times
- [ ] Verify images load properly (when added)

---

## 📊 What Changed

### Pages Updated:
1. **Homepage** (`/`)
   - Both products now marked as LIVE
   - Enhanced hero section
   - Updated product descriptions
   - Added links to dedicated product pages

### New Pages Created:
2. **Chama Platform** (`/products/chama-platform`)
   - Full product showcase
   - Features, how it works, pricing
   - Multiple CTAs
   
3. **LipaClear** (`/products/lipaclear`)
   - Full product showcase
   - Problem/solution, features, use cases
   - Multiple CTAs

### Infrastructure:
- Updated `sitemap.xml` with new pages
- Documentation added (PRODUCT_SHOWCASE_UPDATE.md)
- Mobile menu cleaned up
- Navigation streamlined

---

## 🔗 Important URLs

### Production Site
- Main: https://naniya.co.ke
- Chama Platform Product Page: https://naniya.co.ke/products/chama-platform
- LipaClear Product Page: https://naniya.co.ke/products/lipaclear

### Product Applications
- Chama Platform: https://chama.naniya.co.ke
- LipaClear: https://lipaclear.naniya.co.ke

### Backend Services (Railway)
- Chama Backend: chama-backend-production-b3cd.up.railway.app
- LipaClear Backend: lipaclear-backend-production.up.railway.app

### Repository
- GitHub: https://github.com/amimobenja/naniya-website

---

## 🐛 Troubleshooting

### Deployment Fails
1. Check Vercel dashboard for build logs
2. Verify package.json dependencies are correct
3. Ensure Node.js version matches (v25.6.1 or compatible)
4. Check for any TypeScript errors

### Pages Don't Load
1. Clear browser cache (Cmd+Shift+R on Mac)
2. Check Vercel deployment status
3. Verify DNS settings (if custom domain issues)
4. Check browser console for errors

### Styling Issues
1. Verify Tailwind classes are correct
2. Check for any CSS conflicts
3. Test in different browsers
4. Check mobile viewport settings

---

## 📝 Rollback Plan

If issues occur after deployment:

### Quick Rollback (Vercel Dashboard)
1. Go to Vercel Dashboard
2. Find the deployment
3. Click "..." menu
4. Select "Rollback to this deployment" on previous version

### Git Rollback
```bash
git log  # Find the previous commit hash
git revert <commit-hash>
git push origin main
```

---

## 📈 Next Steps After Deployment

### Immediate (Day 1):
1. Monitor error logs in Vercel
2. Check Google Analytics (if set up)
3. Test all links and forms
4. Share with team for feedback

### Short-term (Week 1):
1. Submit sitemap to search engines
2. Add product screenshots/images
3. Monitor user feedback
4. Fix any reported issues

### Long-term (Month 1):
1. Analyze traffic to new product pages
2. A/B test different CTAs
3. Gather customer testimonials
4. Add FAQ sections
5. Consider adding demo videos

---

## 💡 Tips

### DNS Configuration
Ensure these subdomains are properly configured:
- `chama.naniya.co.ke` → Chama Platform app
- `lipaclear.naniya.co.ke` → LipaClear app

Both should point to their respective Railway deployments.

### SSL Certificates
Verify SSL certificates are active for:
- naniya.co.ke
- chama.naniya.co.ke
- lipaclear.naniya.co.ke

### Monitoring
Consider setting up:
- Uptime monitoring (e.g., UptimeRobot)
- Error tracking (e.g., Sentry)
- Analytics (e.g., Plausible or Google Analytics)

---

## 📞 Support

For deployment issues:
- **Vercel Support:** https://vercel.com/support
- **Repository Issues:** https://github.com/amimobenja/naniya-website/issues
- **Owner:** Benja Amimo (amimobenja08@gmail.com)

---

## ✅ Final Checklist Before Pushing

- [x] All files committed
- [x] Build successful locally
- [x] Documentation complete
- [x] Sitemap updated
- [ ] Push to GitHub
- [ ] Monitor Vercel deployment
- [ ] Test production site
- [ ] Submit sitemap to search engines

---

**Last Updated:** February 25, 2026  
**Ready to Deploy:** YES ✅  
**Estimated Deploy Time:** 2-3 minutes  
**Risk Level:** Low (all changes tested locally)

**Command to deploy:**
```bash
cd /Users/isenberg/Documents/projects/naniya-website && git push origin main
```

Good luck with the deployment! 🚀
