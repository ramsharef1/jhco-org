# 🧪 LOCAL TESTING & MONITORING FRAMEWORK

**Purpose:** Ensure all enrichment features work perfectly locally before production deployment

---

## 📋 PHASE 1 TESTING CHECKLIST

### **Database Tests**
- [ ] Migration applied successfully
- [ ] All new tables created
- [ ] Foreign key relationships intact
- [ ] Indexes optimized
- [ ] Default values working

### **API Endpoint Tests**

**ML Predictions**
```bash
POST /api/enrichment/predictions
- Create prediction
- Get predictions by model
- Get predictions by target
- Filter by confidence score
- Paginate results
```

**Custom Reports**
```bash
GET /api/enrichment/reports
POST /api/enrichment/reports
PUT /api/enrichment/reports/:id
DELETE /api/enrichment/reports/:id
POST /api/enrichment/reports/:id/generate
POST /api/enrichment/reports/:id/schedule
```

**Integrations**
```bash
GET /api/enrichment/integrations
POST /api/enrichment/integrations
PUT /api/enrichment/integrations/:service
DELETE /api/enrichment/integrations/:service
POST /api/enrichment/integrations/:service/test
POST /api/enrichment/integrations/:service/sync
GET /api/enrichment/integrations/logs
```

**2FA Security**
```bash
POST /api/enrichment/security/2fa/setup
POST /api/enrichment/security/2fa/verify
POST /api/enrichment/security/2fa/disable
GET /api/enrichment/security/2fa/backup-codes
```

**Audit Logs**
```bash
GET /api/enrichment/security/audit-logs
GET /api/enrichment/security/audit-logs/[id]
GET /api/enrichment/security/audit-logs/user/[userId]
POST /api/enrichment/security/audit-logs (automatic on actions)
```

**Performance Metrics**
```bash
POST /api/enrichment/performance/metrics
GET /api/enrichment/performance/metrics
GET /api/enrichment/performance/metrics/page/[page]
GET /api/enrichment/performance/metrics/analytics
```

**Cache Management**
```bash
GET /api/enrichment/performance/cache
POST /api/enrichment/performance/cache
DELETE /api/enrichment/performance/cache/[key]
GET /api/enrichment/performance/cache/stats
```

---

## 🔍 TESTING PROTOCOLS

### **1. API Contract Testing**
```javascript
// For each endpoint test:
✓ Request validation (required fields)
✓ Response schema validation
✓ Error handling (404, 400, 500)
✓ Status codes correct
✓ Rate limiting headers
✓ CORS headers present
```

### **2. Integration Testing**
```javascript
// Test data flows:
✓ Create → Read → Update → Delete
✓ Bulk operations
✓ Concurrent requests
✓ Transaction rollback on error
✓ Database consistency
```

### **3. Performance Testing**
```javascript
// Load testing metrics:
✓ Page load time < 3s
✓ API response time < 200ms
✓ Database queries < 100ms
✓ Cache hit rate > 80%
✓ Memory usage stable
```

### **4. Security Testing**
```javascript
// For 2FA & Audit:
✓ 2FA codes expire correctly
✓ Backup codes single-use
✓ Audit logs immutable
✓ Sensitive data encrypted
✓ GDPR requests processed
```

---

## 📊 LOCAL MONITORING SETUP

### **1. API Monitoring Dashboard**
```
Location: http://localhost:3002/admin/monitoring

Shows:
- Request rate (RPS)
- Error rate (%)
- Response time (ms)
- Active connections
- Cache hit rate
- Database query time
- Integration sync status
```

### **2. Database Health Check**
```sql
-- Monitor daily
SELECT
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size,
  n_live_tup as rows
FROM pg_stat_user_tables
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

### **3. Performance Profiling**
```javascript
// Monitor with Lighthouse CI locally
npm run lighthouse
// Generates: reports/lighthouse.json
```

### **4. Error Tracking**
```
Sentry (local mock):
- Error rate
- Error types
- Stack traces
- User impact
```

---

## 🧬 TEST DATA GENERATION

### **Synthetic Data Seeds**

```prisma
// Seed script: prisma/seeds/phase1.seed.ts

1. MLModel - 5 sample models
   - donor_churn (accuracy: 0.92)
   - impact_forecast (accuracy: 0.88)
   - cohort_analysis (accuracy: 0.95)

2. Prediction - 100 predictions per model
   - Various targets
   - Confidence scores 0.7 - 0.99
   - Generated reasoning

3. CustomReport - 10 sample reports
   - Various schedules (daily, weekly, monthly)
   - Different metric combinations

4. Integration - 5 connected services
   - Salesforce (mock connection)
   - Stripe (mock connection)
   - Mailchimp (mock connection)
   - Twilio (mock connection)
   - Slack (mock connection)

5. AuditLog - 500 sample logs
   - Various action types
   - Different users
   - Success/failure mix
```

---

## ✅ QUALITY GATES

**Before Phase 2:**
- [ ] All Phase 1 API tests passing (100%)
- [ ] Database migrations clean
- [ ] No console errors/warnings
- [ ] TypeScript strict mode clean
- [ ] Performance benchmarks met
- [ ] Security tests passing
- [ ] Integration tests passing
- [ ] Zero flaky tests

---

## 📈 METRICS TRACKING

**Track during Phase 1:**

| Metric | Target | Actual |
|--------|--------|--------|
| API Response Time | < 200ms | TBD |
| Database Query Time | < 100ms | TBD |
| Error Rate | < 0.1% | TBD |
| Cache Hit Rate | > 80% | TBD |
| Test Coverage | > 95% | TBD |
| TypeScript Errors | 0 | TBD |
| Console Errors | 0 | TBD |

---

## 🚀 DEPLOYMENT CHECKLIST

Before moving Phase 1 to staging:

- [ ] All tests passing locally
- [ ] Performance benchmarks met
- [ ] Security audit completed
- [ ] Code review approved
- [ ] Documentation complete
- [ ] Monitoring alerts configured
- [ ] Rollback plan ready

---

## 📝 DAILY LOCAL TEST RUNS

```bash
# Run daily:
npm run test:phase1          # All Phase 1 tests
npm run lint                 # TypeScript + ESLint
npm run performance:check    # Lighthouse
npm run security:check       # Security audit
npm run db:health            # Database health
```

---

**Status:** Phase 1 Build in Progress  
**Next:** Phase 1B - UI Components  
**Then:** Integration Testing

