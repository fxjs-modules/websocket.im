declare namespace FxWebSocketIM {
    type IdType = string | number

    type DateType = string | number

    interface OnceTimestampObject {
        created_at: DateType
    }

    interface TimestampObject {
        created_at: DateType
        updated_at: DateType
    }

    interface ArchivableTimestampObject {
        created_at: DateType
        archived_at: DateType
    }
}