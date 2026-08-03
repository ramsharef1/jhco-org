# 🚀 VERCEL POSTGRES SETUP GUIDE

**Objective:** Connect Vercel Postgres database to JHCO admin panel

**Timeline:** 5-10 minutes

---

## ✅ STEP 1: SET UP VERCEL POSTGRES

### In Vercel Dashboard:

1. **Go to:** https://vercel.com/dashboard
2. **Select your project:** `jhco-org`
3. **Click:** "Storage" tab
4. **Click:** "Create Database"
5. **Choose:** "Postgres"
6. **Region:** Select closest region (or default)
7. **Name:** `jhco-db` (or your preference)
8. **Create Database**

### Copy Connection String:

After creation, you'll see:
```
POSTGRES_URL_NON_POOLING=postgresql://...
POSTGRES_URL=postgresql://...
```

**Copy the entire connection string** → You'll need it in Step 2

---

## ✅ STEP 2: ADD ENVIRONMENT VARIABLES

### In Vercel Dashboard:

1. **Go to:** Project Settings → "Environment Variables"
2. **Add these variables:**

```
DATABASE_URL = [paste your POSTGRES_URL from Step 1]

JWT_SECRET = super-secret-key-change-this-in-production-12345

NEXT_PUBLIC_API_URL = https://jhco-org.vercel.app
```

**Important:** 
- Replace `DATABASE_URL` with your actual connection string
- Change `JWT_SECRET` to something unique
- Keep these secret - never commit to git

3. **Click:** "Save"

---

## ✅ STEP 3: SET UP PRISMA

### Install dependencies (Local):

```bash
npm install @prisma/client @vercel/postgres jose bcryptjs
```

### Generate Prisma Client:

```bash
npx prisma generate
```

### Push schema to database:

```bash
npx prisma db push
```

**This creates all database tables**

---

## ✅ STEP 4: CREATE INITIAL ADMIN USER

### Run Prisma Studio to create admin:

```bash
npx prisma studio
```

This opens: http://localhost:5555

### In Prisma Studio:

1. **Click:** "User" model
2. **Click:** "Create new record"
3. **Fill in:**
   - Email: `admin@convertec.cloud`
   - Password: `[generate secure password - will be hashed]`
   - Name: `JHCO Admin`
   - Role: `ADMIN`
4. **Save**

**Note:** Password needs bcrypt hashing. For now, use a placeholder - we'll fix this in Step 5.

---

## ✅ STEP 5: HASH ADMIN PASSWORD

### Run this Node script locally:

```bash
node -e "
const bcrypt = require('bcryptjs');
const password = 'your-secure-password-here';
bcrypt.hash(password, 10).then(hash => {
  console.log('Hashed password:');
  console.log(hash);
});
"
```

### Copy the hashed output

### Update in Prisma Studio:

1. Open Prisma Studio again: `npx prisma studio`
2. Find the admin user
3. Replace password field with hashed value
4. Save

---

## ✅ STEP 6: DEPLOY TO VERCEL

### Push your code:

```bash
git add .
git commit -m "Set up Vercel Postgres and admin panel"
git push origin main
```

**Vercel auto-deploys** → Check: https://jhco-org.vercel.app

---

## ✅ STEP 7: TEST ADMIN LOGIN

### Visit:
```
https://jhco-org.vercel.app/admin/login
```

### Login with:
- Email: `admin@convertec.cloud`
- Password: `[your secure password]`

---

## 🔧 TROUBLESHOOTING

### Connection error: "Can't reach database"
- **Fix:** Check DATABASE_URL is correct in Vercel settings
- Run: `npx prisma db push` to retry

### Prisma client error: "Could not find @prisma/client"
- **Fix:** Run `npm install @prisma/client`
- Then: `npx prisma generate`

### Login fails
- **Fix:** Verify admin user exists in database
- Run: `npx prisma studio` to check User table

### Environment variables not loading
- **Fix:** Redeploy on Vercel after adding env vars
- Takes 1-2 minutes to propagate

---

## 📋 CHECKLIST - BEFORE PROCEEDING

- [ ] Vercel Postgres created
- [ ] DATABASE_URL copied to Vercel settings
- [ ] JWT_SECRET added to Vercel settings
- [ ] `npm install` run locally
- [ ] `npx prisma db push` completed
- [ ] Admin user created
- [ ] Password hashed with bcrypt
- [ ] Code pushed to GitHub
- [ ] Vercel deployed successfully
- [ ] Admin login works

---

## ✅ YOU'RE READY!

Once you've completed these steps and can login at:
```
https://jhco-org.vercel.app/admin
```

The admin panel is ready for:
- ✅ Image uploads (with watermarks)
- ✅ Homepage content editing
- ✅ Statistics management
- ✅ Story creation
- ✅ Real-time updates to live site

---

## 💡 NEXT STEPS

After setup is verified:

1. Build admin dashboard UI
2. Create image uploader interface
3. Build homepage editor
4. Scrape images from jhco.org.jo
5. Deploy and launch

**Estimated completion:** End of Week 1

---

**Questions?** Review the checklist - most issues are missing env vars or unauthenticated db access.
