# Phase 1 Quick Reference Guide

## Files Modified/Created

### Database Schema
```
prisma/schema.prisma (UPDATED - 736 lines)
├── Added 16 new models
├── Updated User model with 4 new relations
└── Added 15+ database indexes
```

### API Routes (7 endpoints)
```
app/api/enrichment/
├── predictions/route.ts (GET, POST)
├── reports/route.ts (GET, POST, PUT, DELETE)
├── integrations/route.ts (GET, POST, PUT, DELETE)
├── security/
│   ├── 2fa/route.ts (GET, POST, PUT, DELETE)
│   └── audit-logs/route.ts (GET, POST, DELETE)
└── performance/
    ├── metrics/route.ts (GET, POST, PUT)
    └── cache/route.ts (GET, POST, PUT, DELETE)
```

### Documentation
```
PHASE1_BUILD_SUMMARY.md (452 lines - Technical reference)
PHASE1_COMPLETION_REPORT.md (Testing & deployment guide)
PHASE1_QUICK_REFERENCE.md (This file)
```

---

## API Endpoint Quick Links

### 1. Predictions
```
GET  /api/enrichment/predictions?modelId=X&targetType=donor&limit=50
POST /api/enrichment/predictions
```
**Use:** Store and retrieve ML model predictions

### 2. Reports
```
GET    /api/enrichment/reports?userId=X
POST   /api/enrichment/reports
PUT    /api/enrichment/reports
DELETE /api/enrichment/reports?id=X
```
**Use:** Custom report generation and scheduling

### 3. Integrations
```
GET    /api/enrichment/integrations?service=salesforce
POST   /api/enrichment/integrations
PUT    /api/enrichment/integrations
DELETE /api/enrichment/integrations?id=X
```
**Use:** Manage third-party service connections

### 4. 2FA Setup
```
GET    /api/enrichment/security/2fa?userId=X
POST   /api/enrichment/security/2fa?action=setup|enable
PUT    /api/enrichment/security/2fa
DELETE /api/enrichment/security/2fa?userId=X
```
**Use:** Two-factor authentication management

### 5. Audit Logs
```
GET    /api/enrichment/security/audit-logs?userId=X&action=login&limit=100
POST   /api/enrichment/security/audit-logs
DELETE /api/enrichment/security/audit-logs?id=X
```
**Use:** Security event tracking and compliance

### 6. Performance Metrics
```
GET  /api/enrichment/performance/metrics?page=/dashboard&device=mobile&limit=100
POST /api/enrichment/performance/metrics
PUT  /api/enrichment/performance/metrics
```
**Use:** Track Core Web Vitals and page performance

### 7. Cache Management
```
GET    /api/enrichment/performance/cache?key=X&limit=100
POST   /api/enrichment/performance/cache
PUT    /api/enrichment/performance/cache
DELETE /api/enrichment/performance/cache?key=X
```
**Use:** Application-level caching with TTL

---

## Database Models Overview

### Tier 4: Analytics
- **MLModel** - ML model metadata
- **Prediction** - Model predictions with confidence
- **CustomReport** - User-defined reports

### Tier 5: Integration
- **Integration** - Third-party connections
- **IntegrationLog** - Integration activity logs

### Tier 8: Security
- **TwoFactorAuth** - TOTP configuration
- **SecurityAuditLog** - Compliance audit trail
- **DataRetentionPolicy** - Data lifecycle rules
- **GDPRRequest** - Data request tracking

### Tier 13: Performance
- **PerformanceMetric** - Web vitals tracking
- **CacheEntry** - Application cache

---

## Common Tasks

### Create a Prediction
```bash
curl -X POST http://localhost:3000/api/enrichment/predictions \
  -H "Content-Type: application/json" \
  -d '{
    "modelId": "model-id",
    "targetId": "donor-123",
    "targetType": "donor",
    "prediction": 0.85,
    "confidence": 0.92,
    "reasoning": "Based on recent donation patterns"
  }'
```

### Get Audit Logs with Pagination
```bash
curl "http://localhost:3000/api/enrichment/security/audit-logs?userId=user-123&limit=50&offset=0"
```

### Setup 2FA for User
```bash
curl -X POST http://localhost:3000/api/enrichment/security/2fa \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user-123",
    "action": "setup"
  }'
```

### Create Integration
```bash
curl -X POST http://localhost:3000/api/enrichment/integrations \
  -H "Content-Type: application/json" \
  -d '{
    "service": "salesforce",
    "apiKey": "encrypted-key",
    "webhookUrl": "https://example.com/webhook"
  }'
```

### Record Performance Metric
```bash
curl -X POST http://localhost:3000/api/enrichment/performance/metrics \
  -H "Content-Type: application/json" \
  -d '{
    "page": "/dashboard",
    "metric": "LCP",
    "value": 2.5,
    "unit": "ms",
    "device": "mobile"
  }'
```

### Cache Data
```bash
curl -X POST http://localhost:3000/api/enrichment/performance/cache \
  -H "Content-Type: application/json" \
  -d '{
    "key": "dashboard-metrics-user-123",
    "value": "{...json...}",
    "ttl": 3600
  }'
```

---

## Key Statistics

| Metric | Value |
|--------|-------|
| New Models | 16 |
| API Routes | 7 |
| HTTP Methods | 20+ |
| Lines of Code | 980 (routes) + 200 (schema) |
| Database Indexes | 15+ |
| User Relations | 4 |
| Documentation Pages | 3 |

---

## Deployment

### 1. Create Migration
```bash
cd /Users/ramialsharef/Desktop/CLoudPros/jhco-org
npx prisma migrate dev --name add_enrichment_phase1
```

### 2. Generate Client
```bash
npx prisma generate
```

### 3. Verify Build
```bash
npm run build
npm run type-check
```

### 4. Test Endpoints
```bash
npm run test:api
```

### 5. Deploy
```bash
vercel deploy --prod
```

---

## Error Codes

| Status | Meaning |
|--------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Missing required fields |
| 404 | Resource not found |
| 409 | Conflict (duplicate entry) |
| 500 | Server error |

---

## Environment Variables

Required in `.env.local`:
```
DATABASE_URL=postgresql://...
```

---

## Security Notes

- API keys stored encrypted
- TOTP secrets stored encrypted
- User context validated on all endpoints
- Audit logging for sensitive operations
- Pagination prevents data exfiltration
- IP address logging for compliance

---

## Support

For detailed information:
- **API Docs:** See `PHASE1_BUILD_SUMMARY.md`
- **Deployment:** See `PHASE1_COMPLETION_REPORT.md`
- **Schema:** See `prisma/schema.prisma`
- **Routes:** See `app/api/enrichment/**/*.ts`

---

**Status:** ✅ Phase 1 Complete  
**Ready For:** Testing and Deployment  
**Last Updated:** August 4, 2026
