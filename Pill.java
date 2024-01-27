import java.util.Calendar;

public class Pill{

        // gets current date & time
        private Calendar currentDate = Calendar.getInstance();
        private Calendar expiration;
        private int pillQuantity, milligrams, refills;
        // true if weekly, false if daily
        private boolean isWeekly;
        private String warnings, instructions, prescription;

        public Pill(Calendar exp, int quantity, int mg, int ref, boolean weekly, String warn, String instructions, String rx){


        }
        public void setExpirationDate(Calendar expiration) {
                this.expiration = expiration;
        }

        public Calendar getExpirationDate() {
                return expiration;
        }

        public Calendar inputToDate(String date) {
        }



}