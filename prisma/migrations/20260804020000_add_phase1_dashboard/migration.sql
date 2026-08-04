-- CreateTable ImpactMetric
CREATE TABLE "ImpactMetric" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label_en" TEXT NOT NULL,
    "label_ar" TEXT,
    "value" DOUBLE PRECISION NOT NULL,
    "unit_en" TEXT,
    "unit_ar" TEXT,
    "category" TEXT NOT NULL,
    "verification_status" TEXT NOT NULL DEFAULT 'UNVERIFIED',
    "verified_by" TEXT,
    "verified_at" TIMESTAMP(3),
    "icon" TEXT,
    "trend" DOUBLE PRECISION,
    "color" TEXT,
    "data_source" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_id" TEXT NOT NULL,
    CONSTRAINT "ImpactMetric_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable FinancialRecord
CREATE TABLE "FinancialRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "category" TEXT NOT NULL,
    "category_ar" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'JOD',
    "fiscal_year" INTEGER NOT NULL,
    "description" TEXT,
    "description_ar" TEXT,
    "verification_status" TEXT NOT NULL DEFAULT 'UNVERIFIED',
    "verified_by" TEXT,
    "verified_at" TIMESTAMP(3),
    "data_source" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_id" TEXT NOT NULL,
    CONSTRAINT "FinancialRecord_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable Certification
CREATE TABLE "Certification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_en" TEXT NOT NULL,
    "name_ar" TEXT,
    "issuer" TEXT NOT NULL,
    "issue_date" TIMESTAMP(3) NOT NULL,
    "expiry_date" TIMESTAMP(3),
    "badge_type" TEXT NOT NULL,
    "icon_url" TEXT,
    "description_en" TEXT,
    "description_ar" TEXT,
    "verification_document_id" TEXT,
    "display_order" INTEGER DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_id" TEXT NOT NULL,
    CONSTRAINT "Certification_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Certification_verification_document_id_fkey" FOREIGN KEY ("verification_document_id") REFERENCES "Image" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable DashboardExport
CREATE TABLE "DashboardExport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "export_format" TEXT NOT NULL,
    "title" TEXT,
    "file_url" TEXT NOT NULL,
    "file_size" BIGINT,
    "export_params" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_id" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3),
    CONSTRAINT "DashboardExport_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable DashboardEvent
CREATE TABLE "DashboardEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "event_type" TEXT NOT NULL,
    "event_name" TEXT NOT NULL,
    "user_id" TEXT,
    "metadata" JSONB,
    "session_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DashboardEvent_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable DashboardTestimonial (extends existing Testimonial model)
CREATE TABLE "DashboardTestimonial" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "testimonial_id" TEXT NOT NULL,
    "program" TEXT,
    "image_id" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "verification_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DashboardTestimonial_testimonial_id_fkey" FOREIGN KEY ("testimonial_id") REFERENCES "Testimonial" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "DashboardTestimonial_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "ImpactMetric_created_at_idx" ON "ImpactMetric"("created_at" DESC);
CREATE INDEX "ImpactMetric_category_idx" ON "ImpactMetric"("category");
CREATE INDEX "ImpactMetric_verification_status_idx" ON "ImpactMetric"("verification_status");

-- CreateIndex
CREATE INDEX "FinancialRecord_created_at_idx" ON "FinancialRecord"("created_at" DESC);
CREATE INDEX "FinancialRecord_category_idx" ON "FinancialRecord"("category");
CREATE INDEX "FinancialRecord_fiscal_year_idx" ON "FinancialRecord"("fiscal_year");
CREATE INDEX "FinancialRecord_verification_status_idx" ON "FinancialRecord"("verification_status");

-- CreateIndex
CREATE INDEX "Certification_created_at_idx" ON "Certification"("created_at" DESC);
CREATE INDEX "Certification_badge_type_idx" ON "Certification"("badge_type");

-- CreateIndex
CREATE INDEX "DashboardExport_created_by_id_idx" ON "DashboardExport"("created_by_id");
CREATE INDEX "DashboardExport_created_at_idx" ON "DashboardExport"("created_at" DESC);

-- CreateIndex
CREATE INDEX "DashboardEvent_event_type_idx" ON "DashboardEvent"("event_type");
CREATE INDEX "DashboardEvent_user_id_idx" ON "DashboardEvent"("user_id");
CREATE INDEX "DashboardEvent_created_at_idx" ON "DashboardEvent"("created_at" DESC);

-- CreateIndex
CREATE INDEX "DashboardTestimonial_featured_idx" ON "DashboardTestimonial"("featured");
