<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
define( 'FORCE_SSL_ADMIN', true ); // Redirect All HTTP Page Requests to HTTPS - Security > Settings > Secure Socket Layers (SSL) > SSL for Dashboard
// END iThemes Security - Do not modify or remove this line

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'khangdien_dbwp2');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'MWv=EiSDt5+@.#KluKHlqNZD4!^}y5MjR8MHQ&L%CK@PVQT9F;bCys0,0LS[J4/B');
define('SECURE_AUTH_KEY',  'A,s2Qgbi:tp*4Bi_+*}*A*>T]*w}$Y?kA:uh!wR7xC4$Q^`7t$KC5D-0/h_tDiIA');
define('LOGGED_IN_KEY',    ' 5{^|.-7p75mL^;|m|!Xeu#)vJV_Ofl_>*tAn,6p,!1AG)fr(o7? )I4_4#{Txyl');
define('NONCE_KEY',        '&ND0F~t5R#`8x#]rudlwDo {X%cAv.:DkT29bNNk%4FI5 Zgy#H[Nj#9hJk4,p^J');
define('AUTH_SALT',        ';QRFn?cERy$QacRn!D8Z+bj::+HHg)YYWVeog~#Qy*h7(_DP!*WoXcKT(</VY.=y');
define('SECURE_AUTH_SALT', 'oE?wc*g_)Qpv_wj2MAvhT-K8QK7u6v,)n-W=NvR?bp3?UF=[R]k3Oi8r+:K*/vO7');
define('LOGGED_IN_SALT',   '3W}_0-Eq3S`W}*>YkLgA5&&G@vua}+P1ZzaiNR&Pc{0GoOu5D?/Ko;=Qaf)e)9hy');
define('NONCE_SALT',       '%tu-4W}|$:}2MXtK^IZoe,>O261dz?|U(JxoM:Nw}oqG,8Y83XN2Xjqc28-Ee1>G');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ndl_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

define('DISALLOW_FILE_EDIT',true);
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
